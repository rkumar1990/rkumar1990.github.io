# Automated Style Checking with Vale

This repository uses [Vale](https://vale.sh/) to automatically enforce the Microsoft Writing Style Guide on all blog posts.

## How it works

### Automated checks (GitHub Actions)

When you push Markdown files or create a pull request:
1. GitHub Actions runs Vale automatically
2. Vale checks your content against style rules
3. Results appear as comments on your PR
4. Violations are flagged but won't block merging

### Local testing (recommended)

Test your writing before committing:

#### Install Vale

**Windows (PowerShell):**
```powershell
choco install vale
```

**macOS:**
```bash
brew install vale
```

**Linux:**
```bash
wget https://github.com/errata-ai/vale/releases/download/v3.0.7/vale_3.0.7_Linux_64-bit.tar.gz
tar -xvzf vale_3.0.7_Linux_64-bit.tar.gz
sudo mv vale /usr/local/bin/
```

#### Run Vale locally

Check a single file:
```bash
vale docs/blog/posts/your-new-post.md
```

Check all blog posts:
```bash
vale docs/blog/posts/
```

Check with specific severity:
```bash
vale --minAlertLevel=error docs/blog/posts/
```

## Style rules enforced

Vale automatically checks for all 18 style guide rules:

### Voice and tone
- ✅ **Use contractions** - Suggests "don't" instead of "do not"
- ✅ **Second person** - Flags "one can" → suggests "you can"
- ✅ **Simple words** - Suggests "use" instead of "utilize"
- ✅ **Avoid jargon** - Flags "leverage", "paradigm", "synergy"

### Headings
- ✅ **Sentence case** - "How to install" not "How To Install"
- ✅ **No question marks** - Statement format required

### Procedural writing
- ✅ **Use "select" not "click"** - UI interaction terminology
- ✅ **No "please"** - Direct tone preferred
- ✅ **Present tense** - Flags "will open" → suggests "opens"
- ✅ **Bold UI elements** - Reminds to bold buttons, menus, fields

### Clarity
- ✅ **Active voice** - Detects passive voice constructions
- ✅ **Positive phrasing** - Flags "don't forget" → suggests "remember"
- ✅ **Avoid wordiness** - "in order to" → "to"
- ✅ **Avoid condescending** - Flags "simply" or "just"

### Formatting
- ✅ **No exclamation points** - Keeps tone professional
- ✅ **No Latin abbreviations** - Flags e.g., i.e., etc.
- ✅ **Descriptive link text** - Flags "click here"

### Terminology
- ✅ **Microsoft terms** - "sign in" not "login", "email" not "e-mail"

## Alert levels

- **Error** (red): Must fix - violates core style rules
- **Warning** (yellow): Should fix - style preference
- **Suggestion** (blue): Consider fixing - optional improvement

## Configuration files

- `.vale.ini` - Main configuration
- `.github/styles/Blog/` - Custom style rules
- `.github/styles/Vocab/Blog/accept.txt` - Approved technical terms
- `.github/workflows/style-check.yml` - GitHub Actions workflow

## Ignore specific warnings

If Vale flags something incorrectly, you can:

1. **Add to vocabulary:** Add term to `.github/styles/Vocab/Blog/accept.txt`
2. **Inline ignore:** Wrap text in HTML comments
   ```markdown
   <!-- vale off -->
   This text won't be checked.
   <!-- vale on -->
   ```

## Writing workflow

1. Write your blog post in Markdown
2. Run `vale docs/blog/posts/your-post.md` locally
3. Fix any errors or warnings
4. Commit and push
5. GitHub Actions validates automatically
6. Review any additional feedback in PR comments

## Resources

- [Vale documentation](https://vale.sh/docs/)
- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/)
- [Our Style Guide](STYLE_GUIDE.md) - Human-readable reference
