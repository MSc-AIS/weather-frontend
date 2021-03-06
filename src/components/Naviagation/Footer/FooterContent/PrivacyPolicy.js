import privacy from '../../../../assets/statics/privacyPolicy';
import { Typography } from '@material-ui/core';

const style = {
    listStyleType: 'upper-roman'
}

const privacyPolicy = () => (
    <ol style={style}>
        {privacy.map((ctx, index) => (
            <li key={index}>
                <Typography variant="h4" component="h4" color="primary">{ctx.header}</Typography>
                <Typography variant="subtitle1" component="p" color="textSecondary">{ctx.content}</Typography>
            </li>
        ))}
    </ol>
);

export default privacyPolicy;