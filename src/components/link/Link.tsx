import { Link as RouterLink } from 'react-router-dom';
import './link.scss';

export default function Link({ to, children, stealth }: React.ComponentProps<any>) {
    const local = to[0] === '/';
    const className = 'link' + (stealth ? ' link_stealth' : '');
    return (
        <>
            {(local && (
                <RouterLink className={className} to={to}>
                    {children}
                </RouterLink>
            )) || (
                <a className={className} href={to}>
                    {children}
                </a>
            )}
        </>
    );
}
