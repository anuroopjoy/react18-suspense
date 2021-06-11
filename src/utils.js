import * as _ from 'lodash';
export function sum([a, b]) {
    return _.sum([a, b]);
}

function wrapPromise(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
}
export function getFooterData() {
    const dataPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('============================');
        }, 3000);
    });
    return wrapPromise(dataPromise);
}
