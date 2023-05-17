import styles from './Contacts.module.scss';




const Contacts = () => {

    return <div className={styles.contacts}>
            <div className={styles.logo}>
            </div>
            <div className={styles.desc}>
                <h3>Welcome! Nice to see you!</h3>
                <article>
                    <p style={{textAlign: "center"}}>
                        Hello! My name is Egor. I am Junior Frontend Developer!<br/>
                        This is one of my SPA powered by React JS and Zustand!<br/>
                        Have a nice day!<br/>
                        See my another projects on my GH!
                    </p>
                </article>
            </div>
            <div className={styles.gh}>
                <span>GH:</span>
                <span><a href="https://github.com/GorgeousGeorge90">https://github.com/GorgeousGeorge90</a></span>
            </div>
    </div>
}

export default Contacts