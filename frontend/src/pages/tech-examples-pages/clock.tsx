import {useEffect, useState} from "react";
import {Transition} from "@headlessui/react";
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import styleCode from 'react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark';

const CodePast = () => {
    const codeString = '  // Состояние для времени\n' +
        '    const [time, setTime] = useState(new Date());\n ' +
        '// Настройка интервала\n' +
        '    useEffect(() => {\n' +
        '        const intervalId = setInterval(() => {\n' +
        '            setTime(new Date());\n' +
        '        }, 1000);\n' +
        '\n' +
        '        return () => clearInterval(intervalId);\n' +
        '    }, []);\n' +
        'return (\n' +
        '<div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12 px-6">\n' +
        '   <Transition\n' +
        '       key={time.toLocaleTimeString()} // Анимация при изменении времени\n' +
        '       appear={true}\n' +
        '       show={true}\n' +
        '       enter="transition-opacity duration-500"\n' +
        '       enterFrom="opacity-0"\n' +
        '       enterTo="opacity-100"' +
        '       >\n' +
        '       <span className="text-6xl font-bold text-white mb-15">\n' +
        '           {time.toLocaleTimeString()}\n' +
        '       </span>\n' +
        '   </Transition>\n' +
        '</div>\n' +
        ');';

    return (
        <SyntaxHighlighter language={ts} style={styleCode} lineNumbers={true}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export function Clock() {
    // Состояние для времени
    const [time, setTime] = useState(new Date());

    // Настройка интервала
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-12 px-6">
            {/* Заголовок и описание */}
            <div className="text-center text-white mb-8">
                <h2 className="text-3xl font-bold mb-4">Часы на JavaScript</h2>
                <p className="text-lg text-gray-300">
                    Узнайте, как создать часы на TypeScript и с использованием React.
                </p>
            </div>

            {/* Карточка с часами */}
            <Transition
                key={time.toLocaleTimeString()} // Анимация при изменении времени
                appear={true}
                show={true}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
    <span className="text-6xl font-bold text-white mb-15">
        {time.toLocaleTimeString()}
    </span>
            </Transition>
            <CodePast/>
        </div>
    );
}