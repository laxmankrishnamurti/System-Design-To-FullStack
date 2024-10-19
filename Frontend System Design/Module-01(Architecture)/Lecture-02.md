# Things to consider in Frontend System Design.

1. Requirements ===> What are the things that you wanted to have in your applicatin.

2. Scoping(Priortization) ===> It's obvious that we can't make all functionalities or features at once so we must priortize our work.

3. Tech Choices ===> It is very crutial point of any frontend application to choose a tech stack to develop the product. The decision depends on various factors, like

   - Popularity of the technology
   - Core features
   - Flexibility
   - Ease of integration
   - SSR(Server-Side rendering) support
   - Mobile support
   - Community
   - Future support
   - Market adoption

4. Component Architecture ===> We deeply look up the core level component of the main component that is described in the _high level design_. In this section we look at up the granular level details about the component.

5. Data API & Protocols & Implementation ===> In this section we'll look at up the network calls that would be happen from the frontend to the backend server to perfrom CRUD operations and how we can implement them and optimized on frontend level so that each component has it's data.

## 1. Requirements

1. Functional Requirements (Actons) ===> In this section we covered the functionalities or the features that we are going to offer to the client and the customers.

   - B2B/B2C
   - Module level thinking

     - User management
     - Help & Support
     - Account management
     - Payment gateway
     - Product Listing
     - Cart page
     - Subscription/Pricing

   - Features/module

2. Non-Functional Requirements (No action)===> This is more like treoratical part of the application that we are going to build. Non-functional requirements cover how we are going to manage our application efficiently. It includes
   - Mobile/Desktop first
   - Responsive/Adaptive
   - Asset optimization
   - Performance
   - Security
   - SEO
   - Caching
   - Logging & Monitoring
   - .......etc

## 2. Scoping (Priortization)

1. Functional Requirements

   - B2C
   - Module level thinking
     - Product Listinig
     - Cart page
     - ..........etc
   - Features/Module
     - Search
     - Listing
     - Product Details
     - CRUD operations on items.

2. Non-Functional Requirements
   - Desktop
   - Responsive
   - Asset optimization
   - CSR/SSR
   - Security

## 3. Tech choice

- Rendering engine (React)
- State management library (Redux toolkit)
- Folder structure
- Dependencies
- Build tools (webpack)