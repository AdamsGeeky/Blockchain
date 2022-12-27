---
sidebar_position: 6
---

CSS stands for Cascading Style Sheets. It is a language used to style and layout web pages. It is used in conjunction with HTML to create the look and feel of a website. 

CSS allows designers to control the color, font, size, and layout of web page elements, such as headings, text, images, and links. It is an important tool for web designers and developers as it allows for separation of content (HTML) and design (CSS).

# Css link

A **CSS link** is a tag in HTML that allows you to link to a separate CSS file in your website. It typically looks like this:

```css
<link rel="stylesheet" type="text/css" href="style.css">
```
This tells the browser to load the "style.css" file, which contains the styles for your website. The "rel" and "type" attributes specify the type of link and the "href" attribute specifies the location of the file. You can have multiple CSS links in your HTML code to link to multiple CSS files.

**CSS files** are usually saved with the **.css** extension and can be edited using a text editor or a specialized code editor

# CSS selectors 
are used to select and apply styles to specific elements on a web page. There are several types of CSS selectors including:

## Type selectors: 
These selectors target specific HTML element types, such as 

```css
<p>, <div>, or <h1>.
```
## Class selectors:
These selectors target elements with a specific class attribute, such as 

```css
<p class="intro"> or <div class="container">.
```
## ID selectors: 
These selectors target elements with a specific id attribute, such as 

```css
<p id="intro-paragraph"> or <div id="header">.
```
## Attribute selectors:
These selectors target elements with specific attribute values, such as 

```css
<p lang="en"> or <a href="https://example.com">.
```
## Pseudo-class selectors:

These selectors target elements in a specific state or condition, such as :hover or :active.

## Pseudo-element selectors:

These selectors target specific parts of an element, such as ::before or ::after.

## Combinator selectors:

These selectors allow you to specify relationships between different elements, such as child elements or sibling elements. Examples include the descendant combinator (space), child combinator (>) and adjacent sibling combinator (+).

# Universal selectors: 

These selectors target all elements on the page, regardless of type or attribute. The universal selector is represented by the asterisk (*).





