import { ButtonOrLink, Props as ButtonOrLinkProps } from '@UI/ButtonOrLink';

export interface Props extends ButtonOrLinkProps { }

export default function Link(props: Props) {

    return (
        <ButtonOrLink
            {...props}
            className={"text-brand-dark hover:text-gray-700 dark:text-gray-100 font-medium  hover:text-opacity-80" + " " + props.className ?? ""}
        />
    );
}