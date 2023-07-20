/* eslint-disable @typescript-eslint/no-misused-promises */
import './contactFrom.scss';

import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
    name: string,
    email: string,
    text: string,
}

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = data => console.log(data);

    return (
        <>
            <h2 className="contact-title">
                Let’s work together!
            </h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input className='form__name' placeholder='Your name' {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} />

                {errors?.name?.type === "required" && <p>This field is required</p>}
                {errors?.name?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}

                <input className='form__email' type='email' placeholder='Your Email' {...register("email", { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, required: true })} />
                {errors?.email?.type === "required" && <p>This field is required</p>}
                {errors?.email?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}

                <input className='form__text' placeholder='Tell more about your request' {...register("text")} />
                <input type="submit" value={"Send"} />
            </form>
        </>
    )
}
