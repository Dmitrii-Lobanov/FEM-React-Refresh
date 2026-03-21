import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useFormStatus } from "react-dom";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactInput (props) {
  const {pending} = useFormStatus();
  return (
    <input 
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      disabled={pending}
    />
  );
}

function ContactRoute() {
  const {isSuccess, mutate} = useMutation({
    mutationFn: function (formData) {
      "use server";
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={mutate}>
          <ContactInput type='text' name="name" placeholder="Name" />
          <ContactInput type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
