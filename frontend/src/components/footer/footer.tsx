

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                    <h5 className="text-lg font-semibold">Contacts</h5>
                    <p>Email: example@email.com</p>
                    <a
                        href="/contact"
                        className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
                    >
                        Contact Form
                    </a>
                </div>
                <div>
                    <h5 className="text-lg font-semibold">About Us</h5>
                    <p>
                        I am a developer eager to help you master new technologies and improve your programming skills.
                    </p>
                </div>
                <div>
                    <h5 className="text-lg font-semibold">Follow Us</h5>
                    <div className="flex justify-center gap-3 mt-2">
                        <a
                            href="#"
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
                        >
                            Telegram
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
                        >
                            Discord
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-6 text-center border-t border-gray-700 pt-4">
                <p>&copy; 2025 All rights reserved.</p>
            </div>
        </footer>
    );
}