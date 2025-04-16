import {type AppContext} from "../ctx/ctx";
import {type Express} from "express";
import {ExtractJwt, Strategy as JWTStrategy} from "passport-jwt";
import {Passport} from "passport";
import {config} from "../util_module/utils";


export const applyPassportToExpress = (expressApp: Express, ctx: AppContext) => {

    const passport = new Passport()
    // Проверка jwt токена человека для авторизации
    passport.use(
        new JWTStrategy(
            {
                secretOrKey: config.JWT_SECRET,
                jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
            },
            (jwtPayload: string, done) => {
                ctx.prisma.user.findUnique({
                    where: {id: jwtPayload},
                }).then((user) => {
                    if (!user) {
                        done(null, user);
                        return;
                    }
                    done(null, user);
                }).catch((err) => {
                    done(err, false);
                })
            }
        )
    )
    // Если нет данных об авторизации то пропускам проверку
    expressApp.use((req, res, next) => {
        if (!req.headers.authorization) {
            next()
            return;
        }
        // Если токен отсуствует или сломан тогда просто пропускам
        passport.authenticate('jwt', {session: false}, (...args: any[]) => {
            req.user = args[1] || undefined;
            next();
        })(req, res, next);


    });
}