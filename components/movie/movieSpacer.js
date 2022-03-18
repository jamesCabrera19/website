export default function Spacer({ children }) {
    const styles = {
        container: { margin: 15 },
    };
    return <div style={styles.container}>{children}</div>;
}
