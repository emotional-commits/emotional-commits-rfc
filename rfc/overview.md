# Emotional commits symbol reference

![](http://www.plantuml.com/plantuml/svg/fLTDRvj04BtpApZdW5cmmOwIAcxIIAwIAih7hPVrxe2tWLsqkyHsglxtBevQfM1fmvG34h9vC_jcviqZk32MQhjTcy0y2zbGJUkGGq7RoZx2pYuhKSeQf0sPku5-zwyDbNohXRKWGwjR24x2Cr6Nfnjh6tCwcOZ8FRKwOggUYAzRahwIg97bf-_o_4kjh52ILg7xiHRM12VlNdRlsYtKweU8QhfZN1uWNYOaYKYKJl9aboSJKapfhCFxQHYju9pySi2VDL2NNuc1coNp0LmhAXvQfQekGGna_WuoZhBUrSMuLB8GZYRQ4T95GH2H_njcTi1T7S3EHgDbytY8TWLDfVPT7mGeq2cXNYOUc1QDHH4z9Gil_2Crpw5kfNHDZ0d1URyzhXHhEqh-bcuaQ98jCc_QDr3I2aDwGb8_AG-grGn2tZl9s53vS7QkWTfM0wgS6IVUp9UNDxXMJET-MbPIM44hyGh8TfpxcNTaGrXJIKluCrVZ8osA-N1ORnM72ZdzqpKV0jw1DiBORWiOgxJB6Aa2bFd7r2qTWoCZ9KUKQzLjBKdVrerunSwgItu-zIR_j4992raFfaViS1l7FVkITDYX0TQwrRt7rN6MJ3yKnUuRXLZjIKP9dv1LtMZr0c43kb3QZGr3ZcOIUrE_TJ1wtm-5K9gqyCi0TOVIO0uwZ7CPAVExZ8S6WFTEDBeg-Q1DxvrHP4uHSALWVZMu4pAapeys83b8jiS8Gv8lPaDTM78-H1wzOzVn4UjrfRQor9J3_wU-ZhCX_bDp71tHeR5_KLrt7MEH_jS_RDze_MROCJf4_Fxf7YgW1f3vppw0NpjTGlRbaUA-uVLhEnew7dmRFOB1LN6H-DtOhMBFI4zGVC0hITgOZR91SE4ewRvLVmC0)

| Unicode | Code                                          | Title                  |
| ------- | --------------------------------------------- | ---------------------- |
| 💥      | [breaking-change](#💥-breaking)               | Breaking               |
| 🔨      | [build](#🔨-build-tools)                      | Build tools            |
| 🔧      | [config](#🔧-configuration)                   | Configuration          |
| 👷      | [ci](#👷-ci)                                  | CI                     |
| 🚀      | [deploy](#🚀-deployment)                      | Deployment             |
| 🐚      | [script](#🐚-script)                          | Script                 |
| 🐙      | [task](#🐙-task-runner)                       | Task runner            |
| 📝      | [docs](#📝-documentation)                     | Documentation          |
| ⚖️      | [legal](#⚖️-legal)                            | Legal                  |
| ℹ️      | [source-docs](#ℹ️-source-documentation)       | Source documentation   |
| ✨      | [feat](#✨-feature)                           | Feature                |
| 🛑      | [acl](#🛑-acl)                                | ACL                    |
| 🎉      | [init](#🎉-initialize)                        | Initialize             |
| 🐘      | [state](#🐘-state-management)                 | State management       |
| 🧸      | [model](#🧸-model)                            | Model                  |
| 💽      | [persistent](#💽-persistent-storage)          | Persistent storage     |
| 💬      | [text](#💬-texts)                             | Texts                  |
| 🌐      | [i18n](#🌐-internationalization)              | Internationalization   |
| 💄      | [ui](#💄-ui)                                  | UI                     |
| 🐛      | [fix](#🐛-fix)                                | Fix                    |
| 🔒      | [security](#🔒-fix-security)                  | Fix security           |
| 🔤      | [typo](#🔤-fix-typos)                         | Fix typos              |
| ⚡      | [perf](#⚡-improve-performance)               | Improve performance    |
| 🐠      | [perf-memory](#🐠-memory-performance)         | Memory performance     |
| 🌿      | [perf-resources](#🌿-save-resources)          | Save resources         |
| 🏇      | [perf-speed](#🏇-speed-performance)           | Speed performance      |
| ♻️      | [refactor](#♻️-refactor)                      | Refactor               |
| 📌      | [dependency-pin](#📌-pin-a-dependency)        | Pin a dependency       |
| ➕      | [dependency-add](#➕-add-a-dependency)        | Add a dependency       |
| ⬇️      | [dependency-down](#⬇️-downgrade-a-dependency) | Downgrade a dependency |
| ⬆️      | [dependency-up](#⬆️-upgrade-a-dependency)     | Upgrade a dependency   |
| 🌈      | [format](#🌈-format)                          | Format                 |
| 🔠      | [naming](#🔠-naming)                          | Naming                 |
| 🔖      | [release](#🔖-release)                        | Release                |
| 🔥      | [remove](#🔥-remove)                          | Remove                 |
| ➖      | [dependency-remove](#➖-remove-a-dependency)  | Remove a dependency    |
| ✅      | [test](#✅-test)                              | Test                   |
| 🤡      | [mock](#🤡-mock)                              | Mock                   |
| 📸      | [snapshot](#📸-snapshot)                      | Snapshot               |

### 💥 Breaking

- Conventional commits alternative: `BREAKING CHANGE`
- Gitmoji alternative: `:boom:`
- Semver impact: major

Use if the change breaks backward compatibility of public API in any way

### 🔨 Build tools

- Conventional commits alternative: `build`
- Gitmoji alternative: N/A
- Semver impact: patch

Add or update code, libraries and configuration for support tools, build process, scripts and task runner, testing framework, git related files.

### 🔧 Configuration

- Conventional commits alternative: `build`\*
- Gitmoji alternative: `:wrench:`
- Semver impact: patch\*

Add or update configuration of the project or support tools. Use for editing configuration files.

### 👷 CI

- Conventional commits alternative: `ci`
- Gitmoji alternative: `:construction_worker:`
- Semver impact: patch\*

Add or update configuration or integration related to CI system

### 🚀 Deployment

- Conventional commits alternative: `build`\*
- Gitmoji alternative: `:rocket:`
- Semver impact: patch\*

Add or update configuration related to deploying project or its modules (like API docs)

### 🐚 Script

- Conventional commits alternative: `build`\*
- Gitmoji alternative: N/A
- Semver impact: patch\*

Add or update simple scripts (shell or any other scripting language) that are not handled by a task runner

### 🐙 Task runner

- Conventional commits alternative: `build`\*
- Gitmoji alternative: N/A
- Semver impact: patch\*

Add or update task runner's tasks or support utility for your tooling, including compilation, code generation, linting, tests etc.

### 📝 Documentation

- Conventional commits alternative: `docs`
- Gitmoji alternative: `:pencil:`
- Semver impact: patch

Add or update readme, contributors, license, collaboration templates, library meta information and source code documentation.

### ⚖️ Legal

- Conventional commits alternative: `docs`\*
- Gitmoji alternative: `:page_facing_up:`
- Semver impact: patch\*

Use for adding license, terms of use, authors, copyright information, credits to authors and contributors etc.

### ℹ️ Source documentation

- Conventional commits alternative: `docs`\*
- Gitmoji alternative: `:bulb:`
- Semver impact: patch\*

Update source code documentation (human readable or comment annotations). Revision should be only focused on commenting existing source code, but if it is convenient to add documentation with a feature, it is preferable to creating a new revision in most cases.

### ✨ Feature

- Conventional commits alternative: `feat`
- Gitmoji alternative: `:sparkles:`
- Semver impact: minor

Add a new feature no matter if its part of your public API or user inaccessible

### 🛑 ACL

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:sparkles:`\*
- Semver impact: minor\*

Add or update user authentication, authorization and ACL

### 🎉 Initialize

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:tada:`
- Semver impact: minor\*

First commit initializing the repository

### 🐘 State management

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:card_file_box:`
- Semver impact: minor\*

Application state related changes either related to persistent (database, file system, ...) or memory storage (cache, global application state, ...), including state management and related components.

### 🧸 Model

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:card_file_box:`\*
- Semver impact: minor\*

Add or update entity models

### 💽 Persistent storage

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:card_file_box:`\*
- Semver impact: minor\*

Persistent memory management, typically database related changes like connection, data serialization etc.

### 💬 Texts

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:speech_balloon:`
- Semver impact: minor\*

Add or make changes to texts related to applications public API, typically UI elements.

### 🌐 Internationalization

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:globe_with_meridians:`
- Semver impact: minor\*

Add or update internationalization of the project related to public API

### 💄 UI

- Conventional commits alternative: `feat`\*
- Gitmoji alternative: `:lipstick:`
- Semver impact: minor\*

Add, update or enhance application's UI

### 🐛 Fix

- Conventional commits alternative: `fix`
- Gitmoji alternative: `:bug:`
- Semver impact: patch

Fix undesirable behavior that conflicts with a defined contract (updating behavior that has been undefined prior to fixing is not a bug fix)

### 🔒 Fix security

- Conventional commits alternative: `fix`\*
- Gitmoji alternative: `:lock:`
- Semver impact: patch\*

Fix system's issues related to security or make system more robust in this manner

### 🔤 Fix typos

- Conventional commits alternative: `fix`\*
- Gitmoji alternative: `:pencil2:`
- Semver impact: patch\*

Fix all typos, misspelled words, trivial copy-paste errors anywhere in the source, including variable names, file namse or translation tables

### ⚡ Improve performance

- Conventional commits alternative: `perf`
- Gitmoji alternative: `:zap:`
- Semver impact: patch

Improve the application performance in ways of speed, memory or usability

### 🐠 Memory performance

- Conventional commits alternative: `perf`\*
- Gitmoji alternative: `:zap:`\*
- Semver impact: patch\*

Improve performance with regard to memory resources

### 🌿 Save resources

- Conventional commits alternative: `perf`\*
- Gitmoji alternative: `:zap:`\*
- Semver impact: patch\*

Improve performance or reduce usage of tasks that do not have primarily direct impact on performance of the application, but save available resources (optimize observers, debounce API calls, delay crawler, ...)

### 🏇 Speed performance

- Conventional commits alternative: `perf`\*
- Gitmoji alternative: `:zap:`\*
- Semver impact: patch\*

Improve speed performance

### ♻️ Refactor

- Conventional commits alternative: `refactor`
- Gitmoji alternative: `:recycle:`
- Semver impact: patch

Introduce changes that are related to you program files (not 🔨), don't add a new feature and don't fix a bug. Use for refactoring, changing internal functions etc. Change code without affecting its public API functionality.

### 📌 Pin a dependency

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:pushpin:`
- Semver impact: patch\*

Save a specific version of a remote dependency

### ➕ Add a dependency

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:heavy_plus_sign:`
- Semver impact: patch\*

Add a new external dependency

### ⬇️ Downgrade a dependency

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:arrow_down:`
- Semver impact: patch\*

Downgrade an external dependency to an older version that was required prior to this commit

### ⬆️ Upgrade a dependency

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:arrow_up:`
- Semver impact: patch\*

Upgrade an external dependency to a newer version that was required prior to this commit

### 🌈 Format

- Conventional commits alternative: `style`
- Gitmoji alternative: `:rotating_light:`
- Semver impact: patch\*

Fix code formatting, violations of coding style or remove trivial code smells.

### 🔠 Naming

- Conventional commits alternative: `refactor`
- Gitmoji alternative: `:recycle:`
- Semver impact: patch\*

Rename existing variables, functions, components, modules. Anything that had been given a poor name in the past and it is related to internal naming.

### 🔖 Release

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:bookmark:`
- Semver impact: patch\*

Create a tagged release with version bumps and generated code related to the version change (changelog generation etc.)

### 🔥 Remove

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:fire:`
- Semver impact: patch\*

Remove deprecated, dead, unused or obsolete code

### ➖ Remove a dependency

- Conventional commits alternative: `refactor`\*
- Gitmoji alternative: `:heavy_minus_sign:`
- Semver impact: patch\*

Remove external dependency

### ✅ Test

- Conventional commits alternative: `test`
- Gitmoji alternative: `:white_check_mark:`
- Semver impact: patch

Add or update automated tests including minor fixes of developed features. This includes adding failing tests in TDD.

### 🤡 Mock

- Conventional commits alternative: `test`\*
- Gitmoji alternative: `:clown_face:`
- Semver impact: patch\*

Add mock files for testing purposes

### 📸 Snapshot

- Conventional commits alternative: `test`\*
- Gitmoji alternative: `:camera_flash:`
- Semver impact: patch\*

Add or update snapshots from snapshot testing

---

\* The value is not directly assigned to smybol, but transitively inherited from the closest parent node.
