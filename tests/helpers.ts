export async function sleep(sec: number): Promise<void> {
    await new Promise(resolve => {
        setTimeout(resolve, sec * 1000);
    });
}
