export default async function(context) {
    let input = context.request.body;
    return {status: 200, body: input, headers: {'Content-Type': 'application/json'}};
}