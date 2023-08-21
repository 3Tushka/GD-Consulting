/* eslint-disable @typescript-eslint/no-misused-promises */
import './contactFrom.scss';

import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion';

interface FormInput {
    name: string,
    email: string,
    text: string,
}

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = data => console.log(data);

    const animationContainer = {
        hidden: {
            opacit: 0,
            scale: 1,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "easeIn",
                duration: 0.4,
                delay: 0.7,
                staggerChildren: 0.5,
            }
        }
    }

    const animationItem = {
        hidden: {
            opacity: 0,
            x: -320,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
            }
        }
    }

    const animationButton = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,

            transition: {
                duration: 0.7
            }
        }
    }

    return (
        <>
            <h2 className="contact-title">
                Let’s work together!
            </h2>
            <motion.form
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={animationContainer}

                className='form'
                onSubmit={handleSubmit(onSubmit)}>

                {/* input name */}
                <motion.input
                    variants={animationItem}
                    className='form__name'
                    placeholder='Your name'
                    {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}>
                </motion.input>

                {errors?.name?.type === "required" && <p>This field is required</p>}
                {errors?.name?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}

                {/* input email */}

                <motion.input
                    variants={animationItem}
                    className='form__email'
                    type='email'
                    placeholder='Your Email'

                    {...register("email", { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, required: true })} />
                {errors?.email?.type === "required" && <p>This field is required</p>}
                {errors?.email?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}

                <motion.input
                    variants={animationItem}
                    className='form__text'
                    placeholder='Tell more about your request'
                    {...register("text")} />
                <motion.input
                    variants={animationButton}
                    type="submit"
                    value={"Send"} />
            </motion.form>
        </>
    )
}
