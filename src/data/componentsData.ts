import type { ComponentInfo } from "../types";
import CounterDemo from "../components/demos/CounterDemo";
import FormDemo from "../components/demos/FormDemo";
import CardDemo from "../components/demos/CardDemo";
import TodoDemo from "../components/demos/TodoDemo";
import ToggleDemo from "../components/demos/ToggleDemo";
import ColorPickerDemo from "../components/demos/ColorPickerDemo";

export const componentsData: ComponentInfo[] = [
  {
    id: 1,
    name: "CounterDemo",
    description: "A simple counter with increment and decrement buttons",
    category: "Buttons",
    component: CounterDemo,
  },
  {
    id: 2,
    name: "FormDemo",
    description: "Form with validation and submit handling",
    category: "Forms",
    component: FormDemo,
  },
  {
    id: 3,
    name: "CardDemo",
    description: "Expandable card showing user information",
    category: "Cards",
    component: CardDemo,
  },
  {
    id: 4,
    name: "TodoDemo",
    description: "Add, complete, and delete todo items",
    category: "Data Display",
    component: TodoDemo,
  },
  {
    id: 5,
    name: "ToggleDemo",
    description: "Interactive toggle button with state",
    category: "Buttons",
    component: ToggleDemo,
  },
  {
    id: 6,
    name: "ColorPickerDemo",
    description: "Select colors from a predefined palette",
    category: "Buttons",
    component: ColorPickerDemo,
  },
];
