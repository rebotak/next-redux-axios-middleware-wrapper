import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store/count/reducer'
import { fetchData } from '../store/starwars/reducer'

const AddCount = ({ count, addCount, fetchData, starData }) => {
	return (
		<div>
			<style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
			<h1>
				AddCount: <span>{count}</span>
			</h1>
			<button onClick={() => addCount(1)}>Add 1 To Count</button>
			<button onClick={() => fetchData(count)}> FETCH STARWARS</button>
			{starData &&
        <>
        <p className="">check console log for view your request result.</p>
        <hr/>
        <code>
					<pre>
						{starData.name}
					</pre>
        </code>
        </>
			}

		</div>
	)
}

const mapStateToProps = (state) => ({
	count: state.count.count,
	starData: state.starwars.data,
})

const mapDispatchToProps = (dispatch) => {
	return {
		addCount: bindActionCreators(addCount, dispatch),
		fetchData: bindActionCreators(fetchData, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
