# Microsoft Writing Style Guide - Quick Reference

This guide summarizes the Microsoft Writing Style Guide principles we follow for all blog posts and documentation.

## Voice and tone

### Be conversational
- **Use contractions**: you're, don't, can't, it's
- **Use second person** (you) to talk directly to readers
- **Be friendly but professional**

### Keep it simple
- Use short sentences
- Use everyday words
- Avoid jargon, or explain it when necessary
- Use active voice instead of passive

## Headings and titles

### Use sentence case
✅ **Correct**: Create a GitHub repository  
❌ **Incorrect**: Create a GitHub Repository

### Remove question marks from headings
✅ **Correct**: What a technical writer does  
❌ **Incorrect**: What is a Technical Writer?

### Start with a verb for procedural headings
✅ **Correct**: Install the package  
❌ **Incorrect**: Installation of the package

## Formatting

### Bold vs. italics
- **Bold** for UI elements: buttons, menu items, field names
- *Italics* for emphasis (use sparingly)
- `Code formatting` for code, file names, commands

### Lists
- Use **numbered lists** for sequential steps
- Use **bulleted lists** for unordered items
- Use **dashes (-)** for bullets, not asterisks
- Start list items with lowercase unless it's a proper noun or sentence

### Punctuation in lists
- If list items are complete sentences, use ending punctuation
- If list items are fragments, skip ending punctuation
- Be consistent within each list

## Procedural writing

### Use "select" not "click"
✅ **Correct**: Select the **Save** button  
❌ **Incorrect**: Click the **Save** button

### Don't use "please"
✅ **Correct**: Enter your password  
❌ **Incorrect**: Please enter your password

### Use present tense
✅ **Correct**: The page opens  
❌ **Incorrect**: The page will open

### Number the steps
1. Step one
2. Step two
3. Step three

## Terminology

### Common terms (Microsoft style)

| Use this | Not this |
|----------|----------|
| sign in | login, log in |
| sign out | logout, log out |
| app | application |
| select | click |
| email | e-mail |
| username | user name |
| website | web site |
| internet | Internet |
| web | Web |

### Technical terms
- **API** - application programming interface (spell out on first use)
- **URL** - no need to spell out
- **JSON** - no need to spell out
- **GitHub** - always capitalize both G and H

## Best practices

### Active voice
✅ **Active**: The system sends a confirmation email  
❌ **Passive**: A confirmation email is sent by the system

### Positive phrasing
✅ **Positive**: Be sure to save your work  
❌ **Negative**: Don't forget to save your work

### Parallel structure
✅ **Parallel**: 
- Install the software
- Configure the settings
- Test the installation

❌ **Not parallel**:
- Install the software
- Configuration of settings
- You should test the installation

### Avoid these
- Don't use "simply" or "just" (can sound condescending)
- Avoid "in order to" (use "to" instead)
- Avoid Latin abbreviations (e.g., i.e., etc.)
- Don't use exclamation points in documentation

## Accessibility

### Write for scanners
- Use descriptive headings
- Keep paragraphs short (3-5 sentences)
- Use bulleted or numbered lists
- Add white space between sections

### Link text
✅ **Correct**: Learn more about [GitHub Actions](link)  
❌ **Incorrect**: Click [here](link) to learn more

### Alt text for images
- Describe what the image shows
- Keep it concise (under 150 characters)
- Don't start with "Image of" or "Picture of"

## Examples

### Before (not Microsoft style)
```markdown
## How to Install the Software?

Please follow these steps carefully:

1. Firstly, you should click on the Download button.
2. After that, the installation wizard will be opened.
3. Simply click Next until it's finished.

Note: Don't forget to restart your computer!
```

### After (Microsoft style)
```markdown
## Install the software

To install the software:

1. Select the **Download** button.
2. When the installation wizard opens, follow the prompts.
3. Restart your computer to complete the installation.
```

## Automated checking

This repository now uses **Vale** (prose linter) to automatically check all blog posts against these style rules.

### How it works
- **GitHub Actions**: Runs automatically on every commit
- **Local testing**: Run `vale docs/blog/posts/your-post.md` before committing
- **PR comments**: Style violations appear as review comments

See [AUTOMATION.md](AUTOMATION.md) for setup instructions and usage guide.

## Resources

- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/)
- [Microsoft Learn contributor guide](https://learn.microsoft.com/en-us/contribute/)
- [Vale documentation](https://vale.sh/docs/)

---

**Last updated**: March 15, 2026
