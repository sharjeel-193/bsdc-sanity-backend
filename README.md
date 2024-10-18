
# BSDC - Bright Smile Dental Clinic Backend

This repository houses the backend for the Bright Smile Dental Clinic (BSDC) website, built using Sanity CMS. It serves as the content management system, enabling dynamic updates to the frontend for the clinic’s services, blog posts, and staff information.

The frontend repository for this project can be found [here](https://github.com/sharjeel-193/bsdc-next-frontend).

## Features

* **Headless CMS** : Allows for easy management of content like dental services, staff information, and blog posts.
* **Real-time Updates** : Content changes in Sanity CMS reflect instantly on the frontend without redeployment.
* **Structured Content** : Flexible schema-based content structure, customizable to the clinic's needs.

## Getting Started

### Prerequisites

To set up the backend locally, ensure you have:

* Node.js (v14 or later)
* Sanity CLI (`npm install -g @sanity/cli`)

### Installation

**Step 1: Clone the Repository**

```bash
git clone https://github.com/sharjeel-193/bsdc-sanity-backend.git
cd bsdc-sanity-backend
```

**Step 2: Install Dependencies**

```bash
npm install
```

**Step 3: Setup Sanity**

```bash
sanity login
sanity init
```

**Step 4: Start Sanity Studio**

Run the Sanity studio locally:

```bash
sanity start
```

Visit http://localhost:3333 to access the Sanity Studio.

## Technologies Used

* **Sanity CMS:** A headless CMS for structured content management.
* **Sanity CLI:** Command line interface for managing and deploying the Sanity Studio.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
Contact

For inquiries or issues, reach out at: m.sharjeel193@gmail.com