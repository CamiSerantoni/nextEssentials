'use client';
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ isSubmitting }) {
    const { pending} =  useFormStatus()
    status.pending

return <button disabled={pending} >
    {pending ? "Submitting..." : "Share Meal"}
</button>
}
