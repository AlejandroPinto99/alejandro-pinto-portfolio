import './Card.css'

const Card = ({
    title,
    description,
    img,
    link
}: { title: string, description: string, img: string, link: string }) => {
    return (
        <a href={link} target="_blank" className="project-card">
            <img alt="thumbnail" src={img} />
            <div className='information'>
                <h5>{title}</h5>
                <p>
                    {description}
                </p>
            </div>  
        </a>
    )
}

export default Card;