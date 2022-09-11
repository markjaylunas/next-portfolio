import Axios from 'axios';
import FileDownload from 'js-file-download';

export const cvDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    Axios({
        url: '/files/MarkJayLunasCV.pdf',
        method: 'GET',
        responseType: 'blob',
    })
        .then((res) => {
            FileDownload(res.data, 'MarkJayLunasCV.pdf');
        })
        .catch((err) => {
            console.error(err);
        });
};
