import PropTypes from 'prop-types';

const Contenedor = ({children}) => 
    (<div className="w-[80vw] xl:w-[35vw] sm:w-[55vw] h-[9vh] flex justify-around items-center bg-transparent border-2 rounded-tl-xl rounded-br-xl mb-2">{children}</div>
    );
const Img = ({src}) => 
    (<div><img src={src} alt="" className="w-12 h-12 object-contain"/></div>
    );
const Txt = ({children}) => (<div><p className='text-white'>{children}</p></div>);
const Options = ({children}) => (<div><strong className=''>{children}</strong></div>);

Contenedor.propTypes = { children: PropTypes.node.isRequired };
Img.propTypes = { src: PropTypes.string.isRequired };
Txt.propTypes = { children: PropTypes.string.isRequired };
Options.propTypes = { children: PropTypes.string.isRequired };

export const Links = () => {
    return (
        <>
       <a href="https://blackservicesweb.com" target='_blank'>
       <Contenedor>
            <Img src="public/BSW logotype.webp"></Img>
            <Txt>Servicio Web</Txt>
            <Options>...</Options>
        </Contenedor></a> 
        <a href="https://www.instagram.com/zblackwidow/" target='_blank'>
       <Contenedor>
            <Img src="public/icons8-instagram-100.png"></Img>
            <Txt>Profile Instagram</Txt>
            <Options>...</Options>
        </Contenedor></a> 
        <a href="https://github.com/zblackwidow" target='_blank'>
       <Contenedor>
            <Img src="public/logotipo-de-github.png"></Img>
            <Txt>Profile Github</Txt>
            <Options>...</Options>
        </Contenedor></a> 
        <a href="https://www.threads.net/@zblackwidow" target='_blank'>
       <Contenedor>
            <Img src="public/threads.png"></Img>
            <Txt>Profile Threads</Txt>
            <Options>...</Options>
        </Contenedor></a> 
        <a href="https://x.com/z_blackwidow" target='_blank'>
       <Contenedor>
            <Img src="public/icons8-x-100.png"></Img>
            <Txt>Profile X</Txt>
            <Options>...</Options>
        </Contenedor></a>

        </>
    );
}