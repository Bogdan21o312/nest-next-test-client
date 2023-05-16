import Head from "next/head";
import {FC, ReactNode} from "react";
import classes from "@/app/layouts/Layout.module.css"
import Link from "next/link";

interface LayoutProps {
    title: string;
    children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={classes.header}>
                <Link href={"/"} className={classes.title}>{title}</Link>
                <div className={classes.buttons}>
                    <Link href={"/login"} className={classes.button}>LOGIN</Link>
                    <Link href={"/register"} className={classes.button}>REGISTER</Link>
                </div>
            </header>
            <main className={classes.main}>
                {children}
            </main>
        </>
    );
};
