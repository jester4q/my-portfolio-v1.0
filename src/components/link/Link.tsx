import './link.scss';

export default function Link({ children }: React.ComponentProps<any>) {
    return (
        <a className="link" href="">
            {children}
        </a>
    );
}
