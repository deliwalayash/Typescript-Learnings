function riskyOperation() {
    throw new Error("database connect fail");
}
try {
    riskyOperation();
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message, error.name);
    }
}
