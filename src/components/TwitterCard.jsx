import { useState } from "react"

export function TwitterCard ({userName, name}) {
    // const imageSrc = `https://unavatar.io/${userName}`
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state [1]

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing? 'siguiendo': 'seguir'
    const buttonClassName = isFollowing ? 
    'tw-followCard-button is-following' 
    : 'tw-followCard-button'

        const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src = {`https://unavatar.io/twitter/${userName}`} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}