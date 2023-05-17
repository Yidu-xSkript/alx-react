// import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { shallow } from "enzyme";

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

describe("App Component Tests", () => {
    it("Renders without crashing", () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
    it("renders a div with the class App-header", () => {
        const app = shallow(<App />);

        expect(app.find(".App-header")).toBeDefined();
    });
    it("renders a div with the class App-body", () => {
        const app = shallow(<App />);

        expect(app.find(".App-body")).toBeDefined();
    });
    it("renders a div with the class App-footer", () => {
        const app = shallow(<App />);

        expect(app.find(".App-footer")).toBeDefined();
    });
});