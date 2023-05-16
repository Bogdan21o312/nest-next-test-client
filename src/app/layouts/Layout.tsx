import Head from "next/head";
import {FC, ReactNode} from "react";
import classes from "./Layout.module.css"

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
                <div className={classes.title}>{title}</div>
                <div className={classes.buttons}>
                    <button className={classes.button}>LOGIN</button>
                    <button className={classes.button}>REGISTER</button>
                </div>
            </header>
            <main className={classes.main}>
                {children}
            </main>
        </>
    );
};
