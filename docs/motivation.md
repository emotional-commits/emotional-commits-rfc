# Motivation behind Emotional commits

I am dissatisfied with the current state of existing Git commit message conventions.

When working in larger teams, it is difficult to follow a convention without any guidance to achieve human and machine readable commit messages in a consistent format.
Facing issues regarding automation, such as (linking commits/MRs) to external issue tracker (or even multiple ones), gathering any sort of statistical data about the nature of the commits or even managing changelog via automated tools or semver: it all boiled down to lack of order and machine readability in commits' annotation.

This brought me to take interest in that matter and study existing conventions.

## Existing conventions

### Default convention (used by Git)

The default convention used by Git generated commits (merge, revert, cherry-pick).
The standard and its rules are well summarized in [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

I have been using it for several years, practically since I started using Git and it's a great starting point.

- (+) Probably the most popular
- (+) Very easy to write
- (-) Lacks formal specification
- (-) Not machine readable
- (-) The commits are as good as their authors. This has its upper limits (commits are not machine readable), but no bottom (without decent convention, almost any message is valid)

### [Conventional commits](https://www.conventionalcommits.org)

Popular machine readable format for commit message convention.
Apart from the formatting convention it features two machine readable items: types and scopes.

In my (brief) experience it does its job very well. It is simple, readable but machines and humans. Some types are in my opinion heavily overloaded (`refactor` is the leftover bucket for almost every change to code that is not atomic feature or fix, which is lot of revisions on this granularity) and some are very rarely used (`perf` is not that common, `chore` is somewhat thin with `ci` and `build`, `docs` are sometimes committed with features etc.)

The format is efficient but somewhat ugly compared to the default in my opinion, but that is a minor issue.
It is convenient to have the category and subject on the beginning, when going through the history (compared to the default, where you usually get to the best part in the second half of the message).

I think its a missed opportunity to not have sets of subjects for e.g. web development, operations, etc. in order to improve machine readability for subjects as well.
Subject are rarely used conventionally, though they can enforced by [commitlint](https://commitlint.js.org) in each project.

- (+) Fairly popular and battle tested by large projects
- (+) Machine readable types (and scopes in context of a single project)
- (+) (Almost) all types (of the very few) are widely applicable and very general
- (+) Tooling (cli tool + lint)
- (-) Not expressible enough (`fix`, `feat` are defined in the standard, + mentioned Angular convention extension `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`)
- (-) Not strict enough (only defines `fix`, `feat`, other types are recommended and reference different standard)
- (-) Some might find it aesthetically unappealing for being too "machine like"

### [Gitmoji](https://gitmoji.carloscuesta.me/)

Convention based on emojis to hint the type of change in the commit.

After trying it out in my team, though being rather skeptical it went really well.
People started to like very soon and got the hang of it.
My colleges said expressed that Gitmoji was enjoyable to use and I realized they actually started to care more about their history. That is improvement I identify with as well.
It also turned out that its rather convenient when doing code review, or generally going over the list of revisions, even more so than with conventional commits. Visual aids proofed great to understand a general direction of the feature branch at first glance.

- (+) Extremely fun and satisfying to use
- (+) Very expressive
- (-) Lacks formal specification
- (-) Emojis have one sentence explaining them, which might be vague and kind of open to interpretation
- (-) Not very popular (meaning few large projects use it)
- (-) Some emojis are very specific and project arguably favors frontend development
- (-) Contains sometimes redundant or meaningless categories
- (-) Steep learning curve (overwhelming number of emojis)
- (-) Has emojis for meta revisions (revert, merge etc.)
- (-) Difficult to use, (almost) requires a cli tool use (even text, not unicode convention requires to remember non semantic codes for emojis for efficient use)

## Summary

Using for shorter or longer time each of the conventions, I came to conclusion that none of them is perfect.
Actually in my opinion not even _good enough_.

Why haven't I picked the best convention and contributed into the project to make it satisfactory? That is actually exactly what I did and failed, because it was a direction people didn't like to hear. I tried at couple of different places, after realizing that most of Gitmoji users are there for the looks and simplicity, not convention.
So that's that. I just didn't draft a [fifteenth](https://xkcd.com/927/) standard out of share boredom, I tried the easier ways.

If there should be a new convention, based on my experience I drafted several features I think it should have.

**Machine readable, scalable semantics**
Conventional commits' types are great. Scopes are cool idea, but is almost useless in global context. Let's throw a lot of effort into machine readability.
It has limitless possibilities helping developers with semver, changelog, issue tracker, releases, notifications, auto validation.

**Enjoyable to use, easy to read**
A system that developers enjoy might not seem like a priority at first, but it's of ultimate importance for the users to care about the history they make.
Introducing graphical elements is a fantastic idea to make committers care about their revisions.
Making the system feel fun to use and making the users engaged is important, even at the cost of slowing down the process of creating revisions.
Do we want to make less readable messages and move faster if it means (in extremes) going from 20 to 60 seconds per revision created?

**Universal semantics, fair to all parties**
Make everyone feel welcome.
The specification should have all of its features widely applicable to all kinds of development.
It is possible to introduce features that will affect only specific developers, but not at the cost of general usability.

**Easy to start, powerful when mastered**
Make it approachable.
People must not be afraid to use it because of its complexity.
Start small but allow experienced users to specialize.
For example allow beginners to use few polysemantic categories, but allow experienced users to create specific subcategories to explain the intent of the revision in focused and specific detail.

**Formal, strict, scalable to large teams**
Be formal, be strict, discuss the edge cases.
Make the specification approachable, but complete to allow it scale up to large teams.
