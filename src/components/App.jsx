import { TwitterCard } from './TwitterCard'
import './app.css'

export function App () {
    return (
        <section className='App'>
            <TwitterCard isFollowing userName="lebronjames" name="Lebron James"/>
            <TwitterCard isFollowing={false} userName="rx7" name="Mazda Rx7 FD"/>
            <TwitterCard isFollowing userName="mrkrabs" name="Eugene Harold Krabs"/>
            <TwitterCard isFollowing userName="drdre" name="Nissan GTR35"/>
        </section>
        
    )
}