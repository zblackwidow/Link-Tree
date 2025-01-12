import { useState } from 'react';

const Profile = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const handleCopy = () => {
        const email = "Alejandrazacariasrt@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopySuccess('¡Mail copiado!');
            })
            .catch(err => {
                setCopySuccess('Error al copiar');
                console.error('Error al copiar el correo: ', err);
            });
    };

    return (
        <div className="w-full flex flex-col items-center pt-4 mt-[7vh] text-white">
            <div>
                <img className="rounded-full w-32 h-32 object-cover object-bottom" src="public/img.webp" alt="mi-foto" />
            </div>
            <div className="flex flex-col items-center mt-4">
                <h2 className="font-semibold">Alejandra Zacarias</h2>
                <p>Full Stack Developer</p>
                {copySuccess && <p className=" text-gray-500">{copySuccess}</p>}
                <button
                    onClick={handleCopy}
                    className=" bg-transparent text-white rounded"
                >
                    Alejandrazacariasrt@gmail.com
                </button>
               
            </div>
            <div className="flex flex-col items-center mt-4">
                
            </div>
        </div>
    );
};

export default Profile;
