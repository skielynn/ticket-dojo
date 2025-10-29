import Button from "../components/Button";

export default function ButtonsPlayground() {
    return ( 
        <div style={{ padding: "2rem" }}>
            <h1>Button Playground</h1>

            {/* A small grid so examples have spacing */}
            <div style={{ display: "grid", gap: "0.75rem", maxWidth: 420 }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary">Small Button</Button>
                <Button variant="primary" isLoading>Loading</Button>
            </div>
        </div>
    );
}