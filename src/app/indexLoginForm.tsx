"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, XCircleIcon } from "lucide-react";
import { SubmitEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { setSecret } from "./actions";
import { useRouter } from "next/navigation";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";

export default function IndexLoginForm() {
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const login = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {
            let res = await fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({
                    secret: password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let json = await res.json();
            if (!json.success) throw Error(json.message || "Invalid credentials!");

            setSecret(password);
            router.push("/");
        } catch (error) {
            let err = "Unhandled error!";

            if (error instanceof Error) err = error.message;

            toast(err, {
                position: "top-right",
                closeButton: true,
                icon: <XCircleIcon />,
            });

            setLoading(false);
        }
    };

    return (
        <form className="w-full max-w-sm flex flex-col items-start gap-3" onSubmit={login}>
            <Field className="w-full">
                <FieldLabel className="font-semibold" htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" className="w-full max-w-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <FieldDescription>Enter your password for access</FieldDescription>
            </Field>
            <Button disabled={loading} className={`flex flex-row transition-all duration-300`} type="submit"><Spinner data-icon="inline-start" className={`duration-300 ${loading ? 'visible opacity-100 w-4' : 'invisible opacity-0 w-0 -mr-1'}`}/>Login</Button>
        </form>
    )
}