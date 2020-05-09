import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Text, TextTag } from '../components';


storiesOf('Components/Text', module)
    .add('Text', () => {
        return (
            <section className="text">
                <h3>Our text options are:</h3>
                <article className="text-content">
                    <h4>Caption:</h4>
                    <div className="text-content__container">
                        <table>
                            <Text tag={TextTag.CAPTION} size={1}>Monthly savings</Text>
                            <tr>
                                <th>Month</th>
                                <th>Savings</th>
                            </tr>
                            <tr>
                                <td>January</td>
                                <td>$100</td>
                            </tr>
                        </table>
                        <table>
                            <Text tag={TextTag.CAPTION} size={2}>Monthly savings</Text>
                            <tr>
                                <th>Month</th>
                                <th>Savings</th>
                            </tr>
                            <tr>
                                <td>January</td>
                                <td>$100</td>
                            </tr>
                        </table>
                        <table>
                            <Text tag={TextTag.CAPTION} size={3}>Monthly savings</Text>
                            <tr>
                                <th>Month</th>
                                <th>Savings</th>
                            </tr>
                            <tr>
                                <td>January</td>
                                <td>$100</td>
                            </tr>
                        </table>
                        <table>
                            <Text tag={TextTag.CAPTION} size={4}>Monthly savings</Text>
                            <tr>
                                <th>Month</th>
                                <th>Savings</th>
                            </tr>
                            <tr>
                                <td>January</td>
                                <td>$100</td>
                            </tr>
                        </table>
                    </div>
                </article>
                <article className="text-content">
                    <h4>Cite:</h4>
                    <Text tag={TextTag.P} size={1}>
                        This text contains <Text tag={TextTag.CITE}>cite</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={2}>
                        This text contains <Text tag={TextTag.CITE}>cite</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={3}>
                        This text contains <Text tag={TextTag.CITE}>cite</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={4}>
                        This text contains <Text tag={TextTag.CITE}>cite</Text> text.
                    </Text>
                </article>
                <article className="text-content">
                    <h4>Code:</h4>
                    <Text tag={TextTag.CODE} size={1}>A piece of computer code</Text>
                    <Text tag={TextTag.CODE} size={2}>A piece of computer code</Text>
                    <Text tag={TextTag.CODE} size={3}>A piece of computer code</Text>
                    <Text tag={TextTag.CODE} size={4}>A piece of computer code</Text>
                </article>
                <article className="text-content">
                    <h4>Em:</h4>
                    <Text tag={TextTag.P} size={1}>
                        This text contains <Text tag={TextTag.EM}>emphasized</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={2}>
                        This text contains <Text tag={TextTag.EM}>emphasized</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={3}>
                        This text contains <Text tag={TextTag.EM}>emphasized</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={4}>
                        This text contains <Text tag={TextTag.EM}>emphasized</Text> text.
                    </Text>
                </article>
                <article className="text-content">
                    <h4>Paragraph:</h4>
                    <Text tag={TextTag.P} size={1}>This is some text in a paragraph.</Text>
                    <Text tag={TextTag.P} size={2}>This is some text in a paragraph.</Text>
                    <Text tag={TextTag.P} size={3}>This is some text in a paragraph.</Text>
                    <Text tag={TextTag.P} size={4}>This is some text in a paragraph.</Text>
                </article>
                <article className="text-content">
                    <h4>Small:</h4>
                    <Text tag={TextTag.P} size={1}>
                        This text contains <Text tag={TextTag.SMALL}>small</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={2}>
                        This text contains <Text tag={TextTag.SMALL}>small</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={3}>
                        This text contains <Text tag={TextTag.SMALL}>small</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={4}>
                        This text contains <Text tag={TextTag.SMALL}>small</Text> text.
                    </Text>
                </article>
                <article className="text-content">
                    <h4>Strong:</h4>
                    <Text tag={TextTag.P} size={1}>
                        This text contains <Text tag={TextTag.STRONG}>strong</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={2}>
                        This text contains <Text tag={TextTag.STRONG}>strong</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={3}>
                        This text contains <Text tag={TextTag.STRONG}>strong</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={4}>
                        This text contains <Text tag={TextTag.STRONG}>strong</Text> text.
                    </Text>
                </article>
                <article className="text-content">
                    <h4>Sub:</h4>
                    <Text tag={TextTag.P} size={1}>
                        This text contains <Text tag={TextTag.SUB}>subscript</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={2}>
                        This text contains <Text tag={TextTag.SUB}>subscript</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={3}>
                        This text contains <Text tag={TextTag.SUB}>subscript</Text> text.
                    </Text>
                    <Text tag={TextTag.P} size={4}>
                        This text contains <Text tag={TextTag.SUB}>subscript</Text> text.
                    </Text>
                </article>
            </section>
        );
    });