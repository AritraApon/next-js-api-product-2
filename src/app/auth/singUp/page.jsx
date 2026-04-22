'use client'
import { authClient } from "@/Lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, InputGroup, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";

const SingUpPage = () => {
    const [value, setValue] = useState("jr");
    const isInvalid = value.length > 0 && value.length < 3;
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries())

        console.log('from data ', userData)

        const { data, error } = await authClient.signUp.email({
            name:userData.name, // required
            email: userData.email, // required
            password: userData.password, // required
            callbackURL: "/",
        });

    }



    return (
        <div className="mt-10">
            <h1 className="text-center text-5xl font-bold">
                Sing Up
            </h1>
            <div className="flex justify-center items-center my-10 ">
                <Form className="flex w-96 flex-col gap-4 bg-gray-300 rounded-2xl shadow p-5" onSubmit={onSubmit}>
                    {/* user name  */}
                    <TextField className="w-full" isInvalid={isInvalid}>
                        <Label htmlFor="username">Enter your Name</Label>
                        <Input
                            id="username"
                            name="name"
                            placeholder="Enter Your name"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <FieldError>Username must be at least 3 characters</FieldError>
                    </TextField>

                    {/* email  */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* password  */}
                    <TextField
                        isRequired
                        name="password"
                        validate={(value) => {
                            if (!value || value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>

                        <InputGroup>
                            <InputGroup.Input
                                className="w-full max-w-[280px]"
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                            />

                            <InputGroup.Suffix>
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? (
                                        <Eye className="size-4" />
                                    ) : (
                                        <EyeSlash className="size-4" />
                                    )}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>

                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />
                    </TextField>
                    <div className="flex  items-center justify-center gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default SingUpPage;