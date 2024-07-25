import { Formik, Form, Field } from "formik"
import toast, {Toaster} from "react-hot-toast";
import css from "./SearchForm.module.css"

export default function SearchForm ({onSubmit}){

    const handleSubmit = (values, actions) => {
        onSubmit(values.query)
        if( values.query === ''){
            toast.error('Please enter someting')
            return;
        }
        actions.resetForm();
    }

    return (
        <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
            <Form className={css.form}>
            <Field type="text" name="query" placeholder="Search movie..." autoComplete="off" autoFocus className={css.searchInput}></Field>
            <button type="submit" className={css.searchBtn}>Search</button>
            <Toaster/>
            </Form>
            </Formik>
    )
}