import { useState } from 'react';
import EmailMe from '../../email-me/EmailMe';
import './letstalk.scss';

export default function LetsTalk() {
    const [openForm, setOpenForm] = useState<boolean>(false);

    const onOpenForm = () => {
        setOpenForm(true);
    };

    const onCloseForm = () => {
        setOpenForm(false);
    };

    return (
        <section className="letstalk">
            <div className="container" onClick={onOpenForm}>
                <h1>Let's talk about project</h1>
                <div className="arrow" />
            </div>
            <EmailMe open={openForm} onClose={onCloseForm}></EmailMe>
        </section>
    );
}
