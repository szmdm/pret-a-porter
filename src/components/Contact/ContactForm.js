import React, { useState } from 'react'
import { Form,  } from './ContactFormStyle'

export const ContactForm = () => {

    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [message, setMessage] = useState(``)

    return (
        <>
            <Form>
                <form>
                    <div className='formLabels'>
                        <label htmlFor='name'>Your name
                            <input type="text" id='name' name='name' value={name} onChange={e => setName(e.target.value)} />
                        </label>
                    </div>
                    <div className='formLabels'>
                        <label htmlFor='email'>Your email
                            <input type="text" id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className='formLabels'>
                        <label htmlFor='message'>Text message
                            <textarea type="text" id='message' name='message' value={message} onChange={e => setMessage(e.target.value)} />
                        </label>
                    </div>
                    <button type='submit'>Send</button>

                </form>
            </Form>
        </>

    )
}

