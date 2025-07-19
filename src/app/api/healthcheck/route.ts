export async function GET(request: Request) {
    return new Response('ok', {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'cache-control': 'no-store'
        },
    })
}
