import {useNavigate} from "react-router-dom";
import {TRPC} from "../lib/trcp_create.tsx";
import {useEffect} from "react";
import Cookies from "js-cookie";

export function LogOut() {

    // navigate для переадресации
    const navigate = useNavigate();

    // Вызов TRPC utils для сброса валидации даныых и перезапроса их на севере
    const trpcUtils = TRPC.useUtils();

    useEffect(() => {
        Cookies.remove("token");
        void trpcUtils.invalidate().then(() => {
            navigate("/", {replace: true})
        })
    }, []);
}