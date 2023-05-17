import useInput from "../../../../utils&hooks/useInput";


const NewCardInput = () => {
    const name = useInput('')
    const age = useInput('')
    const job = useInput('')
    const city = useInput('')

    return <form>
        <input type="text"
               placeholder='name'
               {...name}
        />
        <input type="text"
               placeholder='age'
               {...age}
        />
        <input type="text"
               placeholder='job'
               {...job}
        />
        <input type="text"
               placeholder='city'
               {...city}
        />
    </form>
}