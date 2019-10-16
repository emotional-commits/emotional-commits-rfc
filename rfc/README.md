# Emotional commits RFC 0.0.1-alpha.1

## Summary

1. Use one of the defined emojis (unicode) in title
2. Use English
3. Write title in imperative, capitalized, without trailing dot
4. Add optional body with additional information
5. Use trailers for metadata

```
🐛 Update foo debounce to use latest value

Debounced foo should be called with tha latest date, not the latest
args provided. Added compare function selecting the args.

Related: #GH-12
Closes: #GH-13 #12348
SemverImpact: patch
EmotionalCommits: 0.0.1-alpha.1
```

## Specification

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

### The commit message

1. The commit message consists of
   - a REQUIRED title,
   - an OPTIONAL body providing additional description if convenient and
   - an OPTIONAL trailer, providing key-value metadata.

Scheme:

```
<title>

[body]

[trailers]
```

#### The message title

Scheme: `<emoji> <description>`

- **A1** The first line of commit message (the title) MUST begin with a single emoji symbol, followed by a REQUIRED single space and REQUIRED description.

> Reason: Using one symbol to represent revision helps authors to perform atomic commits related to one logical change, which proves useful e.g. during code review and reverting. The description is always required to add context and specify the change within the category.

- **A2** The emoji MUST from the set of defined symbols in [reference](./overview.md). Author MAY use any of the symbol's parents due to lack of knowlidge of the existing symbols, but SHOULD be as specific as they are able.

> Reason: We want to make the specification accessible, thusly it is allowed to use just the basic symbols when learning the emotional commits symbols.

- **A3** When introducing breaking changes, author MUST select `💥`.

> Reason: Breaking changes should be rare and reviewed with caution

- **A4** The emoji symbol MUST be inserted as a single unicode character, selected symbol MUST be selected by with regard to its semantics according to author's best judgement and author MUST NOT select custom symbol that is not defined by emotional commits.

> Reason: Using unicode instead of GFM text notation for instance provides better support in terminals without additional tooling and the format is universal and guaranteed to "work" no matter the git hosting service used. Unicode emoji are widely supported in all major terminal emulators, there is no reason to use text aliases in that matter.

- **A5** Additional symbols MUST NOT be used to annotate the commit anywhere in the message and the title SHOULD NOT contain additional emoji symbols for whatever purpose intended.

> Reason: Discourage people from bypassing atomic commits e.g. for using the symbols as tags in any form. Adding a graphical element anywhere but at the beginning of the commit title is confusing.

- **A6** The title length SHOULD NOT exceed 50 characters in length, which leaves 48 characters for message description.

> Reason: See [Git Commit Messages : 50/72 Formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)

- **A7** The title MUST be capitalized, MUST be a single sentence in imperative form, MUST NOT end with a dot and MUST be in English language.

> Reason: The format is aligned with Git generated messages (e.g. for merging). English language is a lingua franca of software development.

- **A8** The title SHOULD describe the changes to the best abilities of the author and SHOULD not duplicate information provided by the emoji symbol.

> Reason: When using the symbol 🐛, it is counter productive to use message `🐛 Fix a bug related to config parsing`. The fact that the commit fixes a bug is obvious from the symbol and repeating only adds dummy content. Spare the prefix and use the commit length to add information related to hte specific commit, e.g. `🐛 Fix parser to handle missing newline on EOF`

#### The message body

- **B1** The body MAY contain any characters including newline, but SHOULD be in English language and SHOULD contain only ASCII characters.
- **B2** Each line of the body SHOULD be less or equal to 72 characters, unless there is a special reason for it (e.g. quoting text, long URLs).

> Reason: See [Git Commit Messages : 50/72 Formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)

- **B3** If the revision introduces changes that seem to need additional context or explanation, the author SHOULD provide it in body.

- **B4** The body SHOULD NOT contain generated content and if changes are trivial or obvious, the body SHOULD be omitted.
  > Reason: If body has no additional information it should be omitted, instead of e.g. repeating the information in title. This clearly states that the change is trivial and the message title is enough to explain it.

#### The message trailers

Scheme: `<key>: <value>`

- **C1** The trailers MAY be used to contain machine readable metadata.
- **C2** Each line MUST have a key followed by a REQUIRED colon, REQUIRED space and a REQUIRED value.
- **C3** Each record MUST be on a separate line, delimited by a REQUIRED newline from the message body (or title if message body is missing) and between individual records MUST NOT be an empty line.
- **C4** Key MUST NOT contain a column and SHOULD be in capitalized kebab case or pascal case, the value MUST NOT include a newline.

> Reason: Following the examples of [Git trailers documentation](https://git-scm.com/docs/git-interpret-trailers)

- **C5** Author can provide custom metadata for information not covered in this point or use existing keys with defined semantics:

| Name               | Description                                                                                          | Allowed values                                            | Example values     |
| ------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------ |
| `Related`          | For addressing an issue in issue tracker, but not resolving it                                       | See [issue tracker references](#issue-tracker-references) | `#RM-15886 #GH-17` |
| `Closes`           | For resolving an issue in issue tracker (this automatically means the revision references the issue) | See [issue tracker references](#issue-tracker-references) | `#56`              |
| `SemverImpact`     | Use to indicate impact on the version according to semver                                            | `patch` `minor` `major`                                   | `patch`            |
| `EmotionalCommits` | Use to help interpreting semantics referring to older versions of Emotional commits                  | Valid emotional commits version                           | `0.0.1-alpha.1`    |

#### Issue tracker references

- **D1** If author wants to reference an issue tracker issue, they MUST use keys defined in [trailers](#The-message-trailers). Multiple references SHALL be placed on one line separated with a single space or on multiple lines with duplicated key.

#### Special commits

- **E1** Commits with default messages generated by Git, MUST NOT follow the rules described in this section. This applies to commits generated by `git revert`, `git merge` (author SHOULD keep the generated message) and `git cherrypick` (author SHOULD keep the original commit message regardless of the convention used).

## Reference

- **G1** Maintainer of a repository following the emotional commits specification SHOULD reference the specification and the version used via adding a badge ![](https://github.com/emotional-commits/emotional-commits-rfc/blob/master/rfc/badge.svg)

```
[![emotional-commits](https://github.com/emotional-commits/emotional-commits-rfc/blob/master/rfc/badge.svg)](https://github.com/emotional-commits/emotional-commits-rfc)
```

> Reason: Helps the maintainers of emotional commits track how popular it is, which symbols are used the most, etc.

## Upgrading and migrating

- **G1** Users MAY "migrate" the repo not using emotional commits simply by applying it to future commits.
- **G2** Once the repo starts using emotional commits it SHOULD force consistency onto all maintainers
- **G3** When upgrading to a new version of emotional commits, maintainer SHOULD upgrade reference and apply changes only to newly created revisions, just as in case of migrating.

## Supported symbols

### Symbols guidelines

- **F1** Symbols SHOULD be applicable to a wide range of applications (e.g. not only specific to web front-end development)
- **F2** Symbols MUST help better understanding of the nature, purpose or intention of the commit. E.g. symbol for _adding a file_ should be rejected, because it does not add any semantic value to the commit nor explain the purpose of it.
- **F3** Symbols MUST form a hierarchy of categories and subcategories. Adding a symbol to the hierarchy specializes the parent symbol.
