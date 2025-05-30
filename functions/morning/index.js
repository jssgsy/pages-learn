export function onRequestGet(context) {
    const json = JSON.stringify({
        "code": 0,
        "message": "Hello morning Get"
    });
    console.log(JSON.stringify(context));
    return new Response(json, {
        headers: {
            'content-type': 'application/json',
            'x-edgefunctions': 'Hello morning Get',
        },
    });
}

export function onRequestPost(context) {
    const json = JSON.stringify({
        "code": 0,
        "message": "Hello morning Post"
    });
    console.log(JSON.stringify(context));
    return new Response(json, {
        headers: {
            'content-type': 'application/json',
            'x-edgefunctions': 'Hello morning Post',
        },
    });
}