import React from "react";
import Input from "../components/Input";
import { useInput } from "../hooks";
import "../styles/globals.css";
import "../styles/documentation.css";

const DocumentationPage: React.FC = () => {
  const defaultInput = useInput("");
  const requiredInput = useInput("", { required: true });
  const passwordInput = useInput("");
  const emailInput = useInput("");
  const searchInput = useInput("");
  const widthInput = useInput("");
  const borderInput = useInput("");
  const radiusInput = useInput("");
  const backgroundInput = useInput("");
  const fontInput = useInput("");
  const paddingInput = useInput("");

  return (
    <div className="documentation-container">
      <h1>Input Component Documentation</h1>
      <p>
        This page showcases the various ways you can use the <code>Input</code>{" "}
        component in your project.
      </p>

      {/* Basic Usage */}
      <section>
        <h2>Basic Usage</h2>
        <p>
          Here’s a simple example of the <code>Input</code> component:
        </p>
        <Input
          label="Default Input"
          placeholder="Enter something..."
          value={defaultInput.value}
          onChange={defaultInput.handleChange}
        />
      </section>

      {/* Required Field */}
      <section>
        <h2>Required Field</h2>
        <p>This input field is required:</p>
        <Input
          label="Required Input"
          placeholder="This field is required"
          value={requiredInput.value}
          onChange={requiredInput.handleChange}
          error={requiredInput.error}
        />
      </section>

      {/* Password Field */}
      <section>
        <h2>Password Field</h2>
        <p>Here’s how you can create a password input:</p>
        <Input
          label="Password"
          placeholder="Enter your password"
          value={passwordInput.value}
          onChange={passwordInput.handleChange}
          type="password"
        />
      </section>

      {/* Email Field with Validation */}
      <section>
        <h2>Email Field with Validation</h2>
        <p>This example demonstrates a simple email validation:</p>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={emailInput.value}
          onChange={emailInput.handleChange}
          type="email"
          error={
            !emailInput.value.includes("@") && emailInput.value
              ? "Invalid email address"
              : ""
          }
        />
      </section>

      {/* Input with Icon */}
      <section>
        <h2>Input with Icon</h2>
        <p>You can also include an icon inside the input field:</p>
        <Input
          label="Search"
          placeholder="Search..."
          value={searchInput.value}
          onChange={searchInput.handleChange}
          icon={
            <span role="img" aria-label="search">
              🔍
            </span>
          }
        />
      </section>

      {/* Disabled Input */}
      <section>
        <h2>Disabled Input</h2>
        <p>This is an example of a disabled input field:</p>
        <Input
          label="Disabled Input"
          placeholder="Can't type here"
          value=""
          onChange={() => {}}
          disabled
        />
      </section>

      {/* Custom Width */}
      <section>
        <h2>Custom Width</h2>
        <p>This example demonstrates an input with a custom width:</p>
        <Input
          label="Custom Width"
          placeholder="Enter something..."
          value={widthInput.value}
          onChange={widthInput.handleChange}
          width="300px"
        />
      </section>

      {/* Custom Border Color */}
      <section>
        <h2>Custom Border Color</h2>
        <p>This example shows an input with a custom border color:</p>
        <Input
          label="Custom Border Color"
          placeholder="Enter something..."
          value={borderInput.value}
          onChange={borderInput.handleChange}
          borderColor="red"
        />
      </section>

      {/* Custom Border Radius */}
      <section>
        <h2>Custom Border Radius</h2>
        <p>This example demonstrates an input with a custom border radius:</p>
        <Input
          label="Custom Border Radius"
          placeholder="Enter something..."
          value={radiusInput.value}
          onChange={radiusInput.handleChange}
          borderRadius="20px"
        />
      </section>

      {/* Custom Background Color */}
      <section>
        <h2>Custom Background Color</h2>
        <p>This example shows an input with a custom background color:</p>
        <Input
          label="Custom Background Color"
          placeholder="Enter something..."
          value={backgroundInput.value}
          onChange={backgroundInput.handleChange}
          backgroundColor="#e2e2e2"
        />
      </section>

      {/* Custom Font Size */}
      <section>
        <h2>Custom Font Size</h2>
        <p>This example demonstrates an input with a custom font size:</p>
        <Input
          label="Custom Font Size"
          placeholder="Enter something..."
          value={fontInput.value}
          onChange={fontInput.handleChange}
          fontSize="20px"
        />
      </section>

      {/* Custom Padding */}
      <section>
        <h2>Custom Padding</h2>
        <p>This example shows an input with custom padding:</p>
        <Input
          label="Custom Padding"
          placeholder="Enter something..."
          value={paddingInput.value}
          onChange={paddingInput.handleChange}
          padding="16px 24px"
        />
      </section>
    </div>
  );
};

export default DocumentationPage;
