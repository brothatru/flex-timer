describe('Flex Timer', () => {
  const storybookUrl =
    'http://localhost:6006/iframe.html?id=components-flextimer--default&viewMode=story';

  context('Tapping', () => {
    beforeEach(() => {
      cy.visit(storybookUrl);
    });

    it('Tapping in its initial state begins the timer.', () => {
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(1000);
      cy.get('[data-cy=circle-progress-bar').then((el) => {
        const strokeDasharray = el[0].getAttribute('stroke-dasharray');
        expect(parseFloat(strokeDasharray.split(' ')[0])).to.be.lessThan(283);
      });
    });

    it('Tapping while the timer is running will pause the timer', () => {
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(1000);
      cy.get('[data-cy=flex-timer]').click();
      let pausedStrokeDasharray;
      cy.get('[data-cy=circle-progress-bar').then((el) => {
        pausedStrokeDasharray = el[0].getAttribute('stroke-dasharray');
      });
      cy.wait(2000);
      cy.get('[data-cy=circle-progress-bar').then((el) => {
        const strokeDasharray = el[0].getAttribute('stroke-dasharray');
        expect(strokeDasharray).to.eq(pausedStrokeDasharray);
      });
    });

    it('Tapping while the timer is paused will resume the timer', () => {
      // start for 1 sec
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(1000);
      // pause for 1 sec
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(1000);
      // resume
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(4000);
      cy.get('[data-cy=circle-progress-bar').should(
        'have.css',
        'stroke-dasharray',
        '0px, 283px',
      );
    });

    it('Tapping when the timer is complete will reset the timer', () => {
      // start timer and wait until it completes
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(5000);
      cy.get('[data-cy=circle-progress-bar').should(
        'have.css',
        'stroke-dasharray',
        '0px, 283px',
      );
      // check that timer resets after 300ms
      cy.get('[data-cy=flex-timer]').click();
      cy.wait(300);
      cy.get('[data-cy=circle-progress-bar').should(
        'have.css',
        'stroke-dasharray',
        '283px, 283px',
      );
    });
  });
});
