interface Props {
    close?: () => void;
}
const Links = ({ close }: Props) => {
    return (
        <>
            <p><a href="#awards" onClick={close}>Awards</a></p>
            <p><a href="#menu" onClick={close}>Menu</a></p>
            <p><a href="#team" onClick={close}>Team</a></p>
            <p><a href="#enjoy" onClick={close}>Enjoy</a></p>
            <p><a href="#contact" onClick={close}>Contact</a></p>
        </>
    )
}

export default Links;