/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable prettier/prettier
const github = require('@actions/github')
const core = require('@actions/core')

try {
	const { context } = github
	const ref = context.ref

	const tag = ref.substr('/ref/tags/'.length, ref.length)

	const regexp = /^([A-Za-z0-9]+)-[0-9]+.[0-9]+.[0-9]+/
	const tagMatch = tag.match(regexp)

	if (!tagMatch) {
		core.setFailed('No tag matching the format could be found, aborting .... !')
		return
	}
	const appName = tagMatch[1]
	core.setOutput('appName', appName)
} catch (err) {
	core.setFailed(`Error ${err}, action may still succeed though`)
}
