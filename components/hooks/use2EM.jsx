import ReactGA from 'react-ga'

export default function use2EM({ label = '' }) {
    ReactGA.event({
        category: '2EM',
        action: 'Browse 2EM',
        label: label,
    })
}
