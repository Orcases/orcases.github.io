# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern website for Frame Foundry, a creative agency specializing in brand identity, digital design, and innovative creative solutions. Built with Astro for optimal performance, the site showcases the agency's creative capabilities and services.

## Architecture

- **Static HTML**: Single-page website (`index.html`) with no build process
- **Frontend Framework**: Material Design components with Bootstrap and Materialize CSS
- **Contact Form**: PHP backend (`sendemail.php`) that processes form submissions via AJAX
- **Assets Structure**: Organized in `/assets/` directory with separate folders for CSS, JS, images, fonts, and frameworks

## Key Files

- `index.html` - Main landing page with coming soon message
- `sendemail.php` - Contact form handler that sends emails to info@framefoundry.io
- `style.css` - Main stylesheet with custom theme and animations
- `assets/js/scripts.js` - Main JavaScript functionality including form handling and parallax effects

## Development Workflow

Since this is a static site with no build process:

1. **Local Development**: Open `index.html` directly in browser or use a local server
2. **Contact Form Testing**: Requires PHP server (MAMP/XAMPP) to test `sendemail.php`
3. **Deployment**: Push to GitHub Pages (automatic deployment from main branch)

## Contact Form Architecture

The contact form uses:
- AJAX submission to `sendemail.php`
- PHP mail() function for sending emails
- Template system expecting `email-templates/simple.html` (currently missing)
- Validation for name, email, and message fields
- JSON responses for success/error handling

## Dependencies

- jQuery 2.1.3
- Bootstrap CSS/JS
- Materialize CSS/JS
- Font Awesome icons
- Material Icons
- jQuery plugins: Stellar (parallax), Easing, InView

## Notes

- No package.json or build tools - this is a pure static site
- Contact form template file (`email-templates/simple.html`) is referenced but missing
- Countdown timer is set to "31 december 2017" and likely needs updating
- Site uses fixed parallax backgrounds that may need performance consideration on mobile devices