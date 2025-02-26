import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting }
  } = useForm();

  const Delay = delayTime => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, delayTime * 1000);
    });
  };

  const onSubmit = async data => {
    await Delay(2);

    alert(`username: ${data.username}\npassword: ${data.password}`);
    console.log(data);

    if (data.username != "Abdullah") {
      setError("allforms", {
        message: "The user is not in our server!"
      });
      if (data.username == "Hacker") {
        setError("bloked_user", {
          message: "This user is bloked in our server!"
        });
      }
    }
  };

  return (
    <>
      {isSubmitting && <div className="text-2xl text-blue-400">Loading...</div>}
      <div className="font-serif form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form text-2xl rounded-bl-3xl rounded-tr-3xl text-center bg-slate-800 pt-10 pb-10 text-white"
        >
          <h2 className="text-center text-4xl">Log In</h2>

          <input
            {...register("username", {
              required: {
                value: true,
                message: "This field is empty!"
              }
            })}
            type="text"
            placeholder="username"
            className="border bg-transparent rounded text-center"
          />
          {errors.username && (
            <div className="error-message">{errors.username.message}</div>
          )}
          <input
            {...register("password", {
              required: {
                value: true,
                message: "This field is empty!"
              },
              minLength: {
                value: 6,
                message: "Password must be 6 letters!"
              },
              maxLength: {
                value: 12,
                message:
                  "Password is too long! words should be limit as 12 letters."
              }
            })}
            type="password"
            placeholder="password"
            className="border bg-transparent rounded text-center"
          />
          {errors.password && (
            <div className="error-message">{errors.password.message}</div>
          )}
          <input
            type="submit"
            disabled={isSubmitting}
            className="border bg-gray-500 rounded-bl-2xl rounded-tr-2xl text-center"
          />
          {errors.allforms && (
            <div className="error-message">{errors.allforms.message}</div>
          )}
          {errors.bloked_user && (
            <div className="error-message">{errors.bloked_user.message}</div>
          )}
        </form>
      </div>
    </>
  );
};
